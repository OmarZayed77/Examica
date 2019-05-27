using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UI.Examica.API.Dtos;
using UI.Examica.Model.Core;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Helpers;
using UI.Examica.Model.Persistence;

namespace UI.Examica.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;

        public ExamsController(IUnitOfWork _unitOfWork , UserManager<AppUser> _userManager)
        {
            unitOfWork = _unitOfWork;
            userManager = _userManager;

        }

        // GET: api/Exams
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Authorize(Roles ="Developer")]
        public async Task<ActionResult<IEnumerable<Exam>>> GetExams()
        {
            return Ok(await unitOfWork.Exams.GetAll());
        }

        // GET: api/Exams/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Authorize]
        public async Task<ActionResult<Exam>> GetExam(int id)
        {
            var exam = await unitOfWork.Exams.GetById(id);
            var orgId = exam.OrganizationId;
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);

            if (user.IsExaminerOfOrg(orgId) || user.IsAdminOfOrg(orgId))
            {
                    if (exam == null)
                {
                    return NotFound();
                }
                    else
                {
                    return Ok(exam);
                }
            }
            else
            {
                return Unauthorized("You  are not Authorized");
            }
        }

        [HttpGet("organization/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Authorize]
        public async Task<ActionResult<Exam>> GetExamByOrganizationId(int id)
        {
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
           
            if (user.IsExaminerOfOrg(id) || user.IsAdminOfOrg(id))
            {       
                var exams = await unitOfWork.Exams.Find(e => e.OrganizationId == id || e.IsPublic);   
                if (exams == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(exams);

                }
            }
            else
            {
                return Unauthorized("You  are not an Examiner");
            }

        }

        // PUT: api/Exams/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> PutResult(int id, ExamDto examDto)
        {
            Exam exam = await unitOfWork.Exams.GetById(id);
            var orgId = exam.OrganizationId;
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);

            if (user.IsExaminerOfOrg(orgId) || user.IsAdminOfOrg(orgId))
            {
                exam = Mapper.Map(examDto, exam);
                unitOfWork.Exams.Update(exam);
                await unitOfWork.SaveAsync();
                return Ok(exam);
            }
            else
            {
                return Unauthorized("you are not Authorized");
            }
        }


        //// POST: api/Exams
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [Authorize]
        public async Task<ActionResult<Exam>> PostExam([FromBody]Exam exam)
        {
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
            if (user.IsExaminerOfOrg(exam.OrganizationId))
            {
                await unitOfWork.Exams.Add(exam);
                int result = await unitOfWork.SaveAsync();

                if (result > 0)
                {
                    return Ok(exam);
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                return Unauthorized("you are not an Examiner");
            }

        }

        // DELETE: api/Exams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Exam>> DeleteExam(int id)
        {
            var exam = await unitOfWork.Exams.SingleOrDefault(e => e.Id == id);
            var orgId = exam.OrganizationId;
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);

            if (user.IsExaminerOfOrg(orgId) || user.IsAdminOfOrg(orgId))
            {
                if (exam == null)
            {
                return NotFound();
            }

            unitOfWork.Exams.Remove(exam);
            await unitOfWork.SaveAsync();

            return exam;
            }
            else
            {
                return Unauthorized("you are not Authorized");
            }

        }
    }
}

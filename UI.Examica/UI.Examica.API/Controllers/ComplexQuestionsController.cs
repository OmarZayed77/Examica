using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UI.Examica.API.Dtos;
using UI.Examica.Model.Core;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Helpers;

namespace UI.Examica.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComplexQuestionsController : ControllerBase
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;

        public ComplexQuestionsController(IUnitOfWork _unitOfWork, UserManager<AppUser> _userManager)
        {
            unitOfWork = _unitOfWork;
            userManager = _userManager;
        }

        // GET: api/complexquestions/1
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<ComplexQuestionDto>> GetQuestion(int id)
        {
            ComplexQuestion question = await unitOfWork.ComplexQuestions.GetComplexWithSubById(id);
            if (question == null) return NotFound();
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
            if (!question.IsPublic && !(user.IsOwnerOfOrg(question.OrganizationId) || user.IsExaminerOfOrg(question.OrganizationId) || user.IsExamineeOfOrg(question.OrganizationId))) return Forbid();
            //return Ok(question);
            return Ok(Mapper.Map<ComplexQuestionDto>(question));
        }

        // GET: api/complexquestions/organization/1
        [HttpGet("organization/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<ActionResult<List<ComplexQuestionDto>>> GetQuestionsOfOrg(int id)
        {
            Organization organization = await unitOfWork.Organizations.GetById(id);
            if (organization == null) return NotFound();
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
            if (!(user.IsOwnerOfOrg(id) || user.IsExaminerOfOrg(id) || user.IsExamineeOfOrg(id))) return Forbid();
            IEnumerable<ComplexQuestion> questions = await unitOfWork.ComplexQuestions.GetComplexsWithSubByOrgId(id);
            return Ok(Mapper.Map<IEnumerable<ComplexQuestion>, List<ComplexQuestionDto>>(questions));
        }
    }
}
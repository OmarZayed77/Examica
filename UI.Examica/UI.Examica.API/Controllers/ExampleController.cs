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
using UI.Examica.Model.Core;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Helpers;

namespace UI.Examica.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : ControllerBase
    {

        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;

        public ExampleController(IUnitOfWork _unitOfWork, UserManager<AppUser> _userManager)
        {
            unitOfWork = _unitOfWork;
            userManager = _userManager;
        }

        // GET: api/Organizations
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Organization>>> GetOrganizations()
        {
            return Ok(await unitOfWork.Organizations.GetAll());
        }

        // GET: api/Organizations/5
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<Organization>> GetOrganization(int id)
        {
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
            if (user.IsOwnerOfOrg(id))
            {
                var organization = await unitOfWork.Organizations.GetById(id);

                if (organization == null)
                {
                    return NotFound();
                }

                return organization;
            }
            else return Unauthorized("You are not an owner!");
        }

        // GET: api/Organizations/OrganizationAdmins/5
        //[HttpGet("{id}")]
        [HttpGet("OrgAdmins/{id}")]
        public async Task<ActionResult<OrganizationAdmin>> GetOrganizationAdmins(int id)
        {
            var Admins = await unitOfWork.OrganizationAdmins.Find(org => org.OrgnaizationId == id);

            if (Admins == null)
            {
                return NotFound();
            }

            return Ok(Admins);

        }

        // GET: api/Organizations/OrganizationExaminees/5
        [HttpGet("OrganizationExaminees/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<OrganizationAdmin>> GetOrganizationExaminees(int id)
        {

            var Admins = await unitOfWork.organizationExaminees.Find(org => org.OrgnaizationId == id);

            if (Admins == null)
            {
                return NotFound();
            }

            return Ok(Admins);

        }

        // GET: api/Organizations/OrganizationExaminers/5
        [HttpGet("OrganizationExaminers/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<OrganizationAdmin>> GetOrganizationExaminers(int id)
        {

            var Admins = await unitOfWork.OrganizationExaminers.Find(org => org.OrgnaizationId == id);

            if (Admins == null)
            {
                return NotFound();
            }

            return Ok(Admins);

        }
        // GET: api/Organizations/OrganizationExaminers/5
        [HttpGet("OrganizationObservers/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<OrganizationAdmin>> GetOrganizationObservers(int id)
        {

            var Admins = await unitOfWork.OrganizationObservers.Find(org => org.OrgnaizationId == id);

            if (Admins == null)
            {
                return NotFound();
            }

            return Ok(Admins);

        }

        // POST: api/Organizations
        [HttpPost]

        public async Task<ActionResult<Organization>> PostOrganization(Organization organization)
        {
            await unitOfWork.Organizations.Add(organization);
            await unitOfWork.SaveAsync();

            return CreatedAtAction("GetOrganization", new { id = organization.Id }, organization);
        }

        // DELETE: api/Organizations/5
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<Organization>> DeleteOrganization(int id)
        {
            AppUser user = await userManager.GetUserAsync(User);
            user = unitOfWork.AppUsers.GetUserWithOrgs(user.Id);
            if (user.IsOwnerOfOrg(id))
            {
                var organization = await unitOfWork.Organizations.GetById(id);
                if (organization == null)
                {
                    return NotFound();
                }
                else
                {
                    unitOfWork.Organizations.Remove(organization);
                    await unitOfWork.SaveAsync();

                }

                return organization;
            }
            else return Unauthorized("You are not an owner of this organinzation");
        }
    }
}
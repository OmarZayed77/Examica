using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Core.Repository;

namespace UI.Examica.Model.Persistence.Repository
{
    public class AppUserRepo : Repository<AppUser>, IAppUserRepo
    {
        public AppUserRepo(DbContext _context) : base(_context)
        {
        }
        public AppUser GetUserWithOrgs(string id)
        {
            return  entities.Include(user => user.Organizations)
                            .Include(user => user.OrganizationAdmins)
                            .Include(user => user.OrganizationExaminees)
                            .Include(user => user.OrganizationExaminers)
                            .Include(user => user.OrganizationObservers)
                            .FirstOrDefault(user => user.Id == id);
        }
    }
}

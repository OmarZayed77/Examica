using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq.Expressions;
using System.Threading.Tasks;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Core.Repository;

namespace UI.Examica.Model.Persistence.Repository
{
    public class OrganizationRepo : Repository<Organization>, IOrganizationRepo
    {
        public OrganizationRepo(DbContext _context) : base(_context)
        {
        }

        async Task<bool> IOrganizationRepo.IsExistedAsync(Expression<Func<Organization, bool>> predicate)
        {
            return await entities.AnyAsync(predicate);
        }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Text;

namespace UI.Examica.Model.Core.Domains
{
    public class OrganizationExaminer
    {
        public int OrgnaizationId { get; set; }
        public string AppUserId { get; set; }
        public Organization Organization { get; set; }
        public AppUser AppUser { get; set; }
    }
}

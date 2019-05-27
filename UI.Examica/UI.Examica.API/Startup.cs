using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using UI.Examica.API.Dtos;
using UI.Examica.Model.Core;
using UI.Examica.Model.Core.Domains;
using UI.Examica.Model.Persistence;

namespace UI.Examica.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // ===== Add our DbContext ========
            services.AddDbContext<ExamicaDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly("UI.Examica.API")
                ));

            // ===== Add Identity ========
            services.AddIdentity<AppUser, IdentityRole>()
                .AddEntityFrameworkStores<ExamicaDbContext>()
                .AddDefaultTokenProviders();

            // ===== Add Jwt Authentication ========
            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear(); // => remove default claims
            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

                })
                .AddJwtBearer(cfg =>
                {
                    cfg.RequireHttpsMetadata = false;
                    cfg.SaveToken = true;
                    cfg.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = Configuration["JwtIssuer"],
                        ValidAudience = Configuration["JwtIssuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
                        ClockSkew = TimeSpan.Zero // remove delay of token when expire
                    };
                });
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // ===== Use UnitOfWork as a Dependecy Injection ========
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            AutoMapper.Mapper.Initialize(config =>
            {
                config.CreateMap<RegisterDto, AppUser>();
<<<<<<< HEAD
                config.CreateMap<ResultDto, Result>();
            });
=======
                config.CreateMap<PricingPlanDto, PricingPlan>();
                config.CreateMap<PricingPlan, PricingPlanDto>();
                config.CreateMap<AddQuestionDto, Question>();

                // Map Question Option to Option DTO
                config.CreateMap<QuestionOption, OptionDto>()
                .ForMember(dest => dest.Id,
                        opt => opt.MapFrom(src => src.OptionId))
                .ForMember(dest => dest.Name,
                        opt => opt.MapFrom(src => src.Option.Name));
                // Map Question to Question DTO
                config.CreateMap<Question, QuestionDto>()
               .ForMember(dest => dest.Options,
                       // Map Each Question Option in List to option DTO
                       opt => opt.MapFrom(src => AutoMapper.Mapper.Map<List<QuestionOption>, List<OptionDto>>(src.QuestionOptions)));
               });
>>>>>>> 329cac6ceadcff8bdcd18c92624ae5c86175c546


            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}

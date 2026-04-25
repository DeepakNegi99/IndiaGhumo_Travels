using Backend.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            if (dto.Email == "test@admin.com")
      
      {
                var token = GenerateToken("Admin");
                return Ok(new { token });
            }

            var userToken = GenerateToken("User");
            return Ok(new { token = userToken });
        }

        public string GenerateToken(String role)
        {
            return "dummy-jwt-token";
        }
    }
}

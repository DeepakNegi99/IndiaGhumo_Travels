using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class User
    {
        public int Id { get; set; }

        public required string Name { get; set; }
        public required string Email { get; set; }
        public string PhoneNo { get; set; }
        [Required]
        public string PasswordHash { get; set; }
        public string Role { get; set; } = "User";
    }
}

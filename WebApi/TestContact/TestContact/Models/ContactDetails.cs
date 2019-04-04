using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestContact.Models
{
    public class ContactDetails
    {
        [Key]
        public int ContactId { get; set; }
        [Required]
        [Column(TypeName="varchar(100)")]
        public string FirstName { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string LastName { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestContact.Models
{
    public class ContactDetailsContext:DbContext
    {

        public ContactDetailsContext(DbContextOptions<ContactDetailsContext> options):base(options)
        {

        }

        public DbSet<ContactDetails> ContactDetails { get; set; }
    }
}

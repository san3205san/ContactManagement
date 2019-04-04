using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestContact.Models;

namespace TestContact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactDetailsController : ControllerBase
    {
        private readonly ContactDetailsContext _context;

        public ContactDetailsController(ContactDetailsContext context)
        {
            _context = context;
        }

        // GET: api/ContactDetails
        [HttpGet]
        public IEnumerable<ContactDetails> GetContactDetails()
        {
            return _context.ContactDetails;
        }

        // GET: api/ContactDetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContactDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contactDetails = await _context.ContactDetails.FindAsync(id);

            if (contactDetails == null)
            {
                return NotFound();
            }

            return Ok(contactDetails);
        }

        // PUT: api/ContactDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactDetails([FromRoute] int id, [FromBody] ContactDetails contactDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactDetails.ContactId)
            {
                return BadRequest();
            }

            _context.Entry(contactDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // GET: api/ContactDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactDetails>> GetContactDetail(int id)
        {
            var contactDetail = await _context.ContactDetails.FindAsync(id);

            if (contactDetail == null)
            {
                return NotFound();
            }

            return contactDetail;
        }

        // POST: api/ContactDetails
        [HttpPost]
        public async Task<IActionResult> PostContactDetails([FromBody] ContactDetails contactDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ContactDetails.Add(contactDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactDetail", new { id = contactDetails.ContactId }, contactDetails);
        }

        // DELETE: api/ContactDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contactDetails = await _context.ContactDetails.FindAsync(id);
            if (contactDetails == null)
            {
                return NotFound();
            }

            _context.ContactDetails.Remove(contactDetails);
            await _context.SaveChangesAsync();

            return Ok(contactDetails);
        }

        private bool ContactDetailsExists(int id)
        {
            return _context.ContactDetails.Any(e => e.ContactId == id);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi_DoAnThucTap_NBD.Data;
using WebApi_DoAnThucTap_NBD.Models;

namespace DoAnThucTap_NBD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BannersController : ControllerBase
    {
        private readonly DataContext _context;

        public BannersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Banners
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Banner>>> GetSliders()
        {
          if (_context.Sliders == null)
          {
              return NotFound();
          }
            return await _context.Sliders.ToListAsync();
        }

        // GET: api/Banners/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Banner>> GetBanner(int id)
        {
          if (_context.Sliders == null)
          {
              return NotFound();
          }
            var banner = await _context.Sliders.FindAsync(id);

            if (banner == null)
            {
                return NotFound();
            }

            return banner;
        }

        // PUT: api/Banners/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBanner(int id,[FromForm] Banner banner, IFormFile image)
        {
            var existingBanner = await _context.Sliders.FindAsync(id);

            if (existingBanner == null)
            {
                return NotFound("Không tìm thấy banner");
            }

            if (image != null)
            {
                var uniqueFileName = /*Guid.NewGuid().ToString() + "_" + */image.FileName;
                var filePath = Path.Combine("wwwroot/images/banners", uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }

                existingBanner.Image = uniqueFileName;
            }

            existingBanner.Name = banner.Name;
            existingBanner.Link = banner.Link;
            existingBanner.Position = banner.Position;
            existingBanner.Description = banner.Description;
            existingBanner.UpdateBy = banner.UpdateBy;
            existingBanner.Status = banner.Status;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(existingBanner);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BannerExists(id))
                {
                    return NotFound("Không tìm thấy banner");
                }
                else
                {
                    throw;
                }
            }
        }

        // POST: api/Banners
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Banner>> PostBanner([FromForm] Banner banner, IFormFile image)
        {
            if (image != null)
            {
                var uniqueFileName = /*Guid.NewGuid().ToString() + "_" + */image.FileName;
                var filePath = Path.Combine("wwwroot/images/banners", uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }

                banner.Image = uniqueFileName;
                banner.CreatedAt = DateTime.Now;
               

                _context.Sliders.Add(banner);
                await _context.SaveChangesAsync();
                return Ok(banner);
            }
            else
            {
                return BadRequest("Hình ảnh không hợp lệ");
            }
        }

        // DELETE: api/Banners/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBanner(int id)
        {
            if (_context.Sliders == null)
            {
                return NotFound();
            }
            var banner = await _context.Sliders.FindAsync(id);
            if (banner == null)
            {
                return NotFound();
            }

            _context.Sliders.Remove(banner);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BannerExists(int id)
        {
            return (_context.Sliders?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

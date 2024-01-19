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
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SlidersController : ControllerBase
    {
        private readonly DataContext _context;

        public SlidersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Sliders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Slider>>> GetSliders()
        {
          if (_context.Sliders == null)
          {
              return NotFound();
          }
            return await _context.Sliders.ToListAsync();
        }

        // GET: api/Sliders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Slider>> GetSlider(int id)
        {
          if (_context.Sliders == null)
          {
              return NotFound();
          }
            var slider = await _context.Sliders.FindAsync(id);

            if (slider == null)
            {
                return NotFound();
            }

            return slider;
        }

        // PUT: api/Sliders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSlider(int id,[FromForm] Slider slider, IFormFile image)
        {
            var existingBanner = await _context.Sliders.FindAsync(id);

            if (existingBanner == null)
            {
                return NotFound("Không tìm thấy Slider");
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

            existingBanner.Name = slider.Name;
            existingBanner.Link = slider.Link;
            existingBanner.Position = slider.Position;
            existingBanner.Description = slider.Description;
            existingBanner.UpdateBy = slider.UpdateBy;
            existingBanner.Status = slider.Status;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(existingBanner);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SliderExists(id))
                {
                    return NotFound("Không tìm thấy Slider");
                }
                else
                {
                    throw;
                }
            }
        }

        // POST: api/Sliders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Slider>> PostSlider([FromForm] Slider slider, IFormFile image)
        {
            if (image != null)
            {
                var uniqueFileName = /*Guid.NewGuid().ToString() + "_" + */image.FileName;
                var filePath = Path.Combine("wwwroot/images/banners", uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }

                slider.Image = uniqueFileName;
                slider.CreatedAt = DateTime.Now;
               

                _context.Sliders.Add(slider);
                await _context.SaveChangesAsync();
                return Ok(slider);
            }
            else
            {
                return BadRequest("Hình ảnh không hợp lệ");
            }
        }

        // DELETE: api/Sliders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSlider(int id)
        {
            if (_context.Sliders == null)
            {
                return NotFound();
            }
            var Slider = await _context.Sliders.FindAsync(id);
            if (Slider == null)
            {
                return NotFound();
            }

            _context.Sliders.Remove(Slider);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SliderExists(int id)
        {
            return (_context.Sliders?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

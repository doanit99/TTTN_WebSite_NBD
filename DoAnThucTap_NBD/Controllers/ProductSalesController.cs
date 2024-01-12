using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DoAnThucTap_Api_NBD.Models;
using WebApi_DoAnThucTap_NBD.Data;

namespace DoAnThucTap_Api_NBD.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductSalesController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductSalesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ProductSales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductSale>>> GetProductSales()
        {
          if (_context.ProductSales == null)
          {
              return NotFound();
          }
            return await _context.ProductSales.ToListAsync();
        }

        // GET: api/ProductSales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductSale>> GetProductSale(int id)
        {
          if (_context.ProductSales == null)
          {
              return NotFound();
          }
            var productSale = await _context.ProductSales.FindAsync(id);

            if (productSale == null)
            {
                return NotFound();
            }

            return productSale;
        }

        // PUT: api/ProductSales/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductSale(int id, [FromForm] ProductSale productSale)
        {
            if (id != productSale.Id)
            {
                return BadRequest();
            }

            _context.Entry(productSale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductSaleExists(id))
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

        // POST: api/ProductSales
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductSale>> PostProductSale([FromForm] ProductSale productSale)
        {
          if (_context.ProductSales == null)
          {
              return Problem("Entity set 'DataContext.ProductSales'  is null.");
          }
            if (productSale.Discount > 100)
            {
                return BadRequest("Phần trăm giảm không được hơn 100");
            }
            if(productSale.Date_Begin >= productSale.Date_End)
            {
                return BadRequest("Ngày bắt đầu không được lớn hơn ngày kết thúc");

            }
            int productQty = await _context.Products.Where(p => p.Id == productSale.Product_Id)
                .Select(p => p.Qty).FirstOrDefaultAsync();
            if (productSale.Qty > productQty)
            {
                return BadRequest("Số lượng sale không được lớn hơn số lượng sản phẩm hiện có");

            }
            _context.ProductSales.Add(productSale);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductSale", new { id = productSale.Id }, productSale);
        }

        // DELETE: api/ProductSales/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductSale(int id)
        {
            if (_context.ProductSales == null)
            {
                return NotFound();
            }
            var productSale = await _context.ProductSales.FindAsync(id);
            if (productSale == null)
            {
                return NotFound();
            }

            _context.ProductSales.Remove(productSale);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductSaleExists(int id)
        {
            return (_context.ProductSales?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

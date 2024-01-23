using DoAnThucTap_Api_NBD.Models;
using DoAnThucTap_Api_NBD.Models.Client;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi_DoAnThucTap_NBD.Data;
using WebApi_DoAnThucTap_NBD.Models;

namespace DoAnThucTap_Api_NBD.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly DataContext _context;

        public OrdersController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderDto orderDto)
        {
            // Xử lý tạo đơn hàng
            var order = new Order
            {
                UserId = orderDto.UserId,
                DeliveryName = orderDto.DeliveryName,
                DeliveryPhone = orderDto.DeliveryPhone,
                DeliveryAddress = orderDto.DeliveryAddress,
                DeliveryGender = orderDto.DeliveryGender,
                Note = orderDto.Note,
                Total = orderDto.Total,
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // Xử lý tạo chi tiết đơn hàng
            foreach (var detailDto in orderDto.OrderDetails)
            {
                var orderDetail = new Order_detail
                {
                    Order_id = order.Id,
                    Product_id = detailDto.ProductId,
                    Discount = detailDto.Discount,
                    Price = detailDto.Price,
                    Amount = detailDto.Amount,
                    Qty = detailDto.Qty,
                   
                };

                _context.Order_details.Add(orderDetail);
            }

            await _context.SaveChangesAsync();

            return Ok(new { Order_id = order.Id });
        }
    }
}

using System.ComponentModel.DataAnnotations;
using WebApi_DoAnThucTap_NBD.Models;

namespace DoAnThucTap_Api_NBD.Models
{
    public class ProductSale
    {
        [Key]
        public int Id { get; set; }
        public int Product_Id { get; set; }
        public int Discount { get; set; }
        public int Qty { get; set; }
        public DateTime Date_Begin { get; set; }
        public DateTime Date_End { get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int? UpdateBy { get; set; }

        public Product Product { get; set; }
    }
}

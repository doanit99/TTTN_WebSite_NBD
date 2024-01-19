using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi_DoAnThucTap_NBD.Models;

namespace DoAnThucTap_Api_NBD.Models
{
    public class ProductSale
    {
        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int Discount { get; set; }
        public int Qty { get; set; }
        public DateTime Date_Begin { get; set; }
        public DateTime Date_End { get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int? UpdateBy { get; set; }

        //[ForeignKey("Product_Id")]
        //public Product Product { get; set; }

    }
}

using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi_DoAnThucTap_NBD.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public int UserId {  get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string DeliveryName { get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string DeliveryGender { get; set; }
        [Column(TypeName = "nvarchar(255)")]
        public string DeliveryPhone { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string DeliveryAddress { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string Note { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int? UpdateBy { get; set; }
        [DefaultValue(2)]
        public int? Status { get; set; }
    }
}

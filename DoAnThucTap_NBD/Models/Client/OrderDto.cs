using System.ComponentModel.DataAnnotations.Schema;

namespace DoAnThucTap_Api_NBD.Models.Client
{
    public class OrderDto
    {
        public int UserId { get; set; }
        public string DeliveryName { get; set; }
        public string DeliveryGender { get; set; }
        public string DeliveryPhone { get; set; }
        public string DeliveryAddress { get; set; }
        public string Note { get; set; }
        public int Total { get; set; }

        public List<OrderDetailDto> OrderDetails { get; set; }
    }

}

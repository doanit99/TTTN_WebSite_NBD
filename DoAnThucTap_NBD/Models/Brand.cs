﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi_DoAnThucTap_NBD.Models
{
    public class Brand
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string? Slug { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string? Image { get; set; }
        public int? Sort_order { get; set; }
        [Column(TypeName = "nvarchar(1000)")]
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int? UpdateBy { get; set; }
        [DefaultValue(2)]
        public int? Status { get; set; }
    }
}

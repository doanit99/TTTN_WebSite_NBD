using DoAnThucTap_Api_NBD.Models;
using Microsoft.EntityFrameworkCore;
using WebApi_DoAnThucTap_NBD.Models;

namespace WebApi_DoAnThucTap_NBD.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Banner> Sliders { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Order_detail> Order_details { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<ProductSale> ProductSales { get; set; }


    }
}

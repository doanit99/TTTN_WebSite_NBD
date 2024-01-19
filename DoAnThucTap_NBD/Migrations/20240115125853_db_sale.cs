using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DoAnThucTap_NBD.Migrations
{
    public partial class db_sale : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductSales_Products_ProductId",
                table: "ProductSales");

            migrationBuilder.DropIndex(
                name: "IX_ProductSales_ProductId",
                table: "ProductSales");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "ProductSales");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSales_Product_Id",
                table: "ProductSales",
                column: "Product_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductSales_Products_Product_Id",
                table: "ProductSales",
                column: "Product_Id",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductSales_Products_Product_Id",
                table: "ProductSales");

            migrationBuilder.DropIndex(
                name: "IX_ProductSales_Product_Id",
                table: "ProductSales");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "ProductSales",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProductSales_ProductId",
                table: "ProductSales",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductSales_Products_ProductId",
                table: "ProductSales",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

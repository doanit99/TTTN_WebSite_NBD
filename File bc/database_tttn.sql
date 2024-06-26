USE [DataWebApi_DoAnThucTap]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Brands]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Brands](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1000) NOT NULL,
	[Slug] [nvarchar](1000) NULL,
	[Image] [nvarchar](1000) NULL,
	[Sort_order] [int] NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Brands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1000) NOT NULL,
	[Slug] [nvarchar](1000) NULL,
	[Parent_Id] [int] NULL,
	[Sort_Order] [int] NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contacts]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Phone] [int] NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Content] [text] NOT NULL,
	[ReplayId] [int] NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Menus]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menus](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](1000) NOT NULL,
	[Link] [nvarchar](1000) NOT NULL,
	[SortOrder] [int] NULL,
	[ParentId] [int] NULL,
	[Type] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Menus] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_details]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order_details](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Order_id] [int] NOT NULL,
	[Product_id] [int] NOT NULL,
	[Discount] [float] NOT NULL,
	[Amount] [float] NOT NULL,
	[Price] [float] NOT NULL,
	[Qty] [int] NOT NULL,
 CONSTRAINT [PK_Order_details] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[DeliveryName] [nvarchar](255) NOT NULL,
	[DeliveryGender] [nvarchar](255) NOT NULL,
	[DeliveryPhone] [nvarchar](255) NOT NULL,
	[DeliveryAddress] [nvarchar](1000) NOT NULL,
	[Note] [nvarchar](1000) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Total] [int] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Category_Id] [int] NOT NULL,
	[Brand_Id] [int] NOT NULL,
	[Name] [nvarchar](1000) NOT NULL,
	[Slug] [nvarchar](1000) NULL,
	[Price] [float] NOT NULL,
	[Qty] [int] NOT NULL,
	[Image] [nvarchar](max) NULL,
	[Description] [nvarchar](255) NOT NULL,
	[Detail] [text] NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductSales]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductSales](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProductId] [int] NOT NULL,
	[Discount] [int] NOT NULL,
	[Qty] [int] NOT NULL,
	[Date_Begin] [datetime2](7) NOT NULL,
	[Date_End] [datetime2](7) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
 CONSTRAINT [PK_ProductSales] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sliders]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sliders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Link] [nvarchar](1000) NOT NULL,
	[Image] [nvarchar](255) NULL,
	[Position] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](1000) NOT NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Sliders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 1/24/2024 7:34:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Gender] [nvarchar](max) NULL,
	[Phone] [int] NULL,
	[Roles] [int] NULL,
	[CreatedAt] [datetime2](7) NOT NULL,
	[UpdateBy] [int] NULL,
	[Status] [int] NULL,
	[Email] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231130122953_create_db', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240106063953_addUser', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240112145639_create_db_prodSale', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240113110845_updateProdSales', N'6.0.25')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240115125853_db_sale', N'6.0.25')
GO
SET IDENTITY_INSERT [dbo].[Brands] ON 

INSERT [dbo].[Brands] ([Id], [Name], [Slug], [Image], [Sort_order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (5, N'apple', N'oppo5', N'download.jfif', 1, N'xịn', CAST(N'2023-12-15T17:42:33.4740697' AS DateTime2), NULL, 1)
INSERT [dbo].[Brands] ([Id], [Name], [Slug], [Image], [Sort_order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (6, N'samsung', N'test', N'samsung.jfif', 2, N'ngon', CAST(N'2023-12-20T15:13:06.0487318' AS DateTime2), NULL, 1)
INSERT [dbo].[Brands] ([Id], [Name], [Slug], [Image], [Sort_order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (11, N'Xixaomi', N'xixaomi', N'xixami.jfif', 0, N'đẹp', CAST(N'2024-01-24T14:10:14.5815410' AS DateTime2), NULL, 1)
INSERT [dbo].[Brands] ([Id], [Name], [Slug], [Image], [Sort_order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (12, N'Oppo', N'oppo', N'download (1).jfif', 0, N'đẹp', CAST(N'2024-01-24T14:25:36.4950072' AS DateTime2), NULL, 1)
INSERT [dbo].[Brands] ([Id], [Name], [Slug], [Image], [Sort_order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (13, N'Dell', N'dell', N'dell.jfif', 0, N'đẹp', CAST(N'2024-01-24T14:34:27.4884239' AS DateTime2), NULL, 1)
SET IDENTITY_INSERT [dbo].[Brands] OFF
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (2, N'Máy tính', N'máy-tính', 1, 2, N'máy tính', CAST(N'2024-01-01T21:12:49.7055932' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (3, N'Điện thoại', N'điện-thoại', 1, 1, N'điện thoại', CAST(N'2024-01-01T21:15:36.7187483' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (4, N'Iphone', N'iphone', 3, 1, N'iphone', CAST(N'2024-01-01T21:23:48.3773100' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (5, N'Samsung', N'samsung', 3, 1, N'samsung', CAST(N'2024-01-01T21:25:00.6959464' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (6, N'Laptop', N'laptop', 2, 1, N'laptop', CAST(N'2024-01-01T21:25:27.7990850' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (7, N'Xixaomi', N'xixaomi', 3, 1, N'xixami', CAST(N'2024-01-24T14:14:29.9023669' AS DateTime2), NULL, 1)
INSERT [dbo].[Categories] ([Id], [Name], [Slug], [Parent_Id], [Sort_Order], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (8, N'Oppo', N'oppo', 3, 1, N'oppo', CAST(N'2024-01-24T14:26:28.0638866' AS DateTime2), NULL, 1)
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Contacts] ON 

INSERT [dbo].[Contacts] ([Id], [UserId], [Name], [Email], [Phone], [Title], [Content], [ReplayId], [CreatedAt], [UpdateBy], [Status]) VALUES (1, NULL, N'Doan Nguyen', N'qor20087@zslsz.com', 967925474, N'hàng tốt', N'x?n', NULL, CAST(N'2024-01-19T15:46:14.0061598' AS DateTime2), NULL, NULL)
INSERT [dbo].[Contacts] ([Id], [UserId], [Name], [Email], [Phone], [Title], [Content], [ReplayId], [CreatedAt], [UpdateBy], [Status]) VALUES (2, NULL, N'admin', N'Admin@gmail.com', 967925475, N'hàng tốt', N'd?p', NULL, CAST(N'2024-01-19T15:49:11.2432172' AS DateTime2), NULL, NULL)
INSERT [dbo].[Contacts] ([Id], [UserId], [Name], [Email], [Phone], [Title], [Content], [ReplayId], [CreatedAt], [UpdateBy], [Status]) VALUES (3, NULL, N'admin2', N'Admin2@gmail.com', 967925474, N'hàng tốt', N'sfsdf', NULL, CAST(N'2024-01-19T15:52:08.4787518' AS DateTime2), NULL, NULL)
INSERT [dbo].[Contacts] ([Id], [UserId], [Name], [Email], [Phone], [Title], [Content], [ReplayId], [CreatedAt], [UpdateBy], [Status]) VALUES (4, NULL, N'admin2', N'Admin2@gmail.com', 967925474, N'hàng tốt', N'dsadas', NULL, CAST(N'2024-01-19T15:54:21.0460893' AS DateTime2), NULL, NULL)
SET IDENTITY_INSERT [dbo].[Contacts] OFF
GO
SET IDENTITY_INSERT [dbo].[Menus] ON 

INSERT [dbo].[Menus] ([Id], [Name], [Link], [SortOrder], [ParentId], [Type], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (2, N'Shop', N'/', 1, 1, N'menu', N'sản phẩm', CAST(N'2023-12-31T13:51:25.3856917' AS DateTime2), NULL, 1)
INSERT [dbo].[Menus] ([Id], [Name], [Link], [SortOrder], [ParentId], [Type], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (3, N'Blog', N'/blog', 1, 1, N'menu', N'bài viết', CAST(N'2023-12-31T13:52:15.6567308' AS DateTime2), NULL, 1)
INSERT [dbo].[Menus] ([Id], [Name], [Link], [SortOrder], [ParentId], [Type], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (4, N'Page', N'/page', 1, 1, N'menu', N'tin tức', CAST(N'2023-12-31T13:52:35.1990370' AS DateTime2), NULL, 1)
INSERT [dbo].[Menus] ([Id], [Name], [Link], [SortOrder], [ParentId], [Type], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (5, N'Contact', N'/contact', 1, 1, N'menu', N'bài viết mới', CAST(N'2024-01-02T16:33:44.3311806' AS DateTime2), NULL, 1)
SET IDENTITY_INSERT [dbo].[Menus] OFF
GO
SET IDENTITY_INSERT [dbo].[Order_details] ON 

INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (1, 1, 12, 0, 0, 35000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (2, 1, 17, 0, 0, 25000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (3, 2, 12, 0, 0, 35000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (4, 2, 17, 0, 0, 25000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (5, 3, 12, 0, 0, 35000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (6, 3, 17, 0, 0, 25000000, 0)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (7, 4, 17, 0, 50000000, 25000000, 2)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (8, 4, 19, 0, 3100000, 3100000, 1)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (9, 5, 18, 0, 24000000, 24000000, 1)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (10, 6, 17, 0, 25000000, 25000000, 1)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (11, 7, 17, 0, 25000000, 25000000, 1)
INSERT [dbo].[Order_details] ([Id], [Order_id], [Product_id], [Discount], [Amount], [Price], [Qty]) VALUES (12, 8, 17, 0, 250000000, 25000000, 10)
SET IDENTITY_INSERT [dbo].[Order_details] OFF
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (1, 1, N'John Doe', N'Male', N'123456789', N'123 Main St', N'Special instructions', CAST(N'2024-01-23T16:34:32.9296166' AS DateTime2), NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (2, 1, N'John Doe', N'Male', N'123456789', N'123 Main St', N'Special instructions', CAST(N'2024-01-23T16:34:42.3252498' AS DateTime2), NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (3, 1, N'John Doe', N'Male', N'123456789', N'123 Main St', N'Special instructions', CAST(N'2024-01-23T16:38:28.4722169' AS DateTime2), NULL, NULL)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (4, 1, N'John Doe', N'Male', N'123456789', N'123 Main St', N'Special instructions', CAST(N'2024-01-23T17:01:06.5224111' AS DateTime2), NULL, 53100000)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (5, 1, N'', N'', N'', N'', N'', CAST(N'2024-01-23T17:18:57.6487349' AS DateTime2), NULL, 24000000)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (6, 1, N'', N'', N'', N'', N'', CAST(N'2024-01-23T17:19:52.3004368' AS DateTime2), NULL, 25000000)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (7, 1, N'Đoan', N'sfsd', N'sfsdfsdfdgdfhfhggggggggggggggggggf', N'éd', N'fsd', CAST(N'2024-01-23T17:28:12.5270789' AS DateTime2), NULL, 25000000)
INSERT [dbo].[Orders] ([Id], [UserId], [DeliveryName], [DeliveryGender], [DeliveryPhone], [DeliveryAddress], [Note], [CreatedAt], [UpdateBy], [Total]) VALUES (8, 6, N'Đoan', N'sfsd', N'sfsdfsdfdgdfhfhggggggggggggggggggf', N'éd', N'fsd', CAST(N'2024-01-23T17:39:18.4324133' AS DateTime2), NULL, 250000000)
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (13, 4, 6, N'iPhone 14 Pro Max 128GB', N'iphone-14-pro-max-128gb', 1000, 54, N'iphone-14-pro_2__5.png', N'đẹp', N'x?n xò', CAST(N'2024-01-04T14:48:17.3567795' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (17, 4, 0, N'iPhone 13 128GB', N'iphone-13-128gb', 1099, 54, N'iphone-13_2_.webp', N'đẹp', N'd?p', CAST(N'2024-01-05T18:09:38.6553722' AS DateTime2), NULL, 0)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (18, 5, 6, N'Samsung Galaxy Z Flip5 512GB', N'samsung-galaxy-z-flip5-512gb', 499, 54, N'samsung-galaxy-z-flip-5-256gb_1_5.webp', N'đẹp', N'x?n xò', CAST(N'2024-01-05T18:10:58.7192924' AS DateTime2), NULL, 0)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (19, 5, 6, N'Samsung Galaxy M14 5G 4GB 128GB', N'samsung-galaxy-m14-5g-4gb-128gb', 800, 54, N'samsung-galaxy-m14.webp', N'đẹp', N'x?n xò', CAST(N'2024-01-05T18:25:02.1025657' AS DateTime2), NULL, 0)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (20, 4, 0, N'iPhone 14 Pro Max 256GB', N'iphone-14-pro-max-256gb', 1899, 54, N'iphone-14-pro_2__5.png', N'đẹp', N'x?n xò', CAST(N'2024-01-19T19:26:29.8964678' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (21, 7, 0, N'Xiaomi Redmi Note 13 6GB 128GB', N'xiaomi-redmi-note-13-6gb-128gb', 200, 54, N'xiaomi-redmi-note-13_1__1_1.webp', N'đẹp', N'M?i, d?y d? ph? ki?n t? nhà s?n xu?t Máy, s?c, Cáp USB Type-C, D?ng c? l?y SIM, V? b?o v?, Hu?ng d?n s? d?ng nhanh B?o hành 18 tháng t?i trung tâm b?o hành Chính hãng. 1 d?i 1 trong 30 ngày n?u có l?i ph?n c?ng t? nhà s?n xu?t. (xem chi ti?t) Giá s?n ph?m dã bao g?m VAT', CAST(N'2024-01-24T14:16:12.6476211' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (22, 7, 11, N'Xiaomi Redmi Note 13 Pro Plus 5G 8GB 256GB', N'xiaomi-redmi-note-13-pro-plus-5g-8gb-256gb', 350, 56, N'xiaomi-redmi-note-13-pro-plus_9_.webp', N'đẹp', N'x?n xò', CAST(N'2024-01-24T14:17:16.3250240' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (23, 7, 11, N'Xiaomi 13T 12GB 256GB', N'xiaomi-13t-12gb-256gb', 400, 56, N'xiaomi-13t_1__1_2.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:18:23.2396427' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (24, 7, 11, N'Xiaomi POCO M5s 6GB 128GB', N'xiaomi-poco-m5s-6gb-128gb', 199, 2, N'xiaomi-poco-m5s-6gb-128gb.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:19:22.2759540' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (25, 8, 12, N'OPPO Reno10 5G 8GB 256GB', N'oppo-reno10-5g-8gb-256gb', 399, 56, N'reno10_5g_-_combo_product_-_blue.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:27:19.1731655' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (26, 8, 12, N'OPPO Find N2 Flip', N'oppo-find-n2-flip', 599, 54, N'oppo-find-n2-flip.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:28:39.9678407' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (27, 8, 12, N'OPPO Find N3 16GB 512GB', N'oppo-find-n3-16gb-512gb', 1999, 56, N'find_n3_-_combo_product_-_gold.webp', N'đẹp', N'd?p l?m', CAST(N'2024-01-24T14:29:39.8850548' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (28, 6, 13, N'Laptop Dell Inspiron 14 I7430-7374SLV CN29D', N'laptop-dell-inspiron-14-i7430-7374slv-cn29d', 1899, 56, N'text_ng_n_32__1_6.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:35:38.7418051' AS DateTime2), NULL, 1)
INSERT [dbo].[Products] ([Id], [Category_Id], [Brand_Id], [Name], [Slug], [Price], [Qty], [Image], [Description], [Detail], [CreatedAt], [UpdateBy], [Status]) VALUES (29, 6, 13, N'Laptop Dell Inspirion 15 3511 PDP3H', N'laptop-dell-inspirion-15-3511-pdp3h', 1699, 56, N'7efbd23a-5394-4002-9d67-8fad17c18121.webp', N'đẹp', N'd?p', CAST(N'2024-01-24T14:40:52.1032975' AS DateTime2), NULL, 1)
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[ProductSales] ON 

INSERT [dbo].[ProductSales] ([Id], [ProductId], [Discount], [Qty], [Date_Begin], [Date_End], [CreatedAt], [UpdateBy]) VALUES (2, 13, 70, 2, CAST(N'2024-01-15T14:44:38.1414021' AS DateTime2), CAST(N'2024-01-16T14:44:38.1414021' AS DateTime2), CAST(N'2024-01-16T16:36:18.2830310' AS DateTime2), NULL)
INSERT [dbo].[ProductSales] ([Id], [ProductId], [Discount], [Qty], [Date_Begin], [Date_End], [CreatedAt], [UpdateBy]) VALUES (3, 17, 90, 2, CAST(N'2024-01-16T16:57:00.0000000' AS DateTime2), CAST(N'2024-01-17T16:57:00.0000000' AS DateTime2), CAST(N'2024-01-16T17:00:02.7515125' AS DateTime2), NULL)
INSERT [dbo].[ProductSales] ([Id], [ProductId], [Discount], [Qty], [Date_Begin], [Date_End], [CreatedAt], [UpdateBy]) VALUES (4, 18, 12, 23, CAST(N'2024-01-09T17:13:00.0000000' AS DateTime2), CAST(N'2024-01-15T17:13:00.0000000' AS DateTime2), CAST(N'2024-01-16T17:14:13.9780701' AS DateTime2), NULL)
INSERT [dbo].[ProductSales] ([Id], [ProductId], [Discount], [Qty], [Date_Begin], [Date_End], [CreatedAt], [UpdateBy]) VALUES (5, 17, 10, 1, CAST(N'2024-01-23T23:05:00.0000000' AS DateTime2), CAST(N'2024-01-30T23:05:00.0000000' AS DateTime2), CAST(N'2024-01-23T23:05:51.1299551' AS DateTime2), NULL)
INSERT [dbo].[ProductSales] ([Id], [ProductId], [Discount], [Qty], [Date_Begin], [Date_End], [CreatedAt], [UpdateBy]) VALUES (6, 13, 30, 2, CAST(N'2024-01-23T23:06:00.0000000' AS DateTime2), CAST(N'2024-01-30T23:06:00.0000000' AS DateTime2), CAST(N'2024-01-23T23:06:59.1776315' AS DateTime2), NULL)
SET IDENTITY_INSERT [dbo].[ProductSales] OFF
GO
SET IDENTITY_INSERT [dbo].[Sliders] ON 

INSERT [dbo].[Sliders] ([Id], [Name], [Link], [Image], [Position], [Description], [CreatedAt], [UpdateBy], [Status]) VALUES (1, N'banner1', N'link1', N'iphone-15-pro-gold-thumbnew-600x600.webp', N'1', N'đẹpu', CAST(N'2023-12-15T17:56:38.4652916' AS DateTime2), NULL, 0)
SET IDENTITY_INSERT [dbo].[Sliders] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (1, N'Doan', N'123', N'Nam', 123456789, NULL, CAST(N'2024-01-09T16:16:14.6934160' AS DateTime2), NULL, NULL, N'doan@gmail.com')
INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (2, N'Admin', N'admin', N'Nam', 123456789, NULL, CAST(N'2024-01-09T16:16:39.2435046' AS DateTime2), NULL, NULL, N'admin@gmail.com')
INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (3, N'abc', N'123', NULL, 0, NULL, CAST(N'2024-01-11T18:05:55.1200607' AS DateTime2), NULL, NULL, N'doan@gmail.com')
INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (4, N'Doan1', N'123', NULL, 0, NULL, CAST(N'2024-01-11T18:35:53.8557763' AS DateTime2), NULL, NULL, N'Doangmail.com')
INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (5, N'test', N'12345', NULL, 0, NULL, CAST(N'2024-01-19T15:13:44.0770432' AS DateTime2), NULL, NULL, N'test@gmail.com')
INSERT [dbo].[Users] ([Id], [UserName], [Password], [Gender], [Phone], [Roles], [CreatedAt], [UpdateBy], [Status], [Email]) VALUES (6, N'Test123', N'123', NULL, 0, NULL, CAST(N'2024-01-23T16:32:22.0564016' AS DateTime2), NULL, NULL, N'test@gmail.com')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Sliders] ADD  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF__Users__Email__5AEE82B9]  DEFAULT (N'') FOR [Email]
GO
ALTER TABLE [dbo].[ProductSales]  WITH CHECK ADD  CONSTRAINT [FK_ProductSales_Products_Product_Id] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProductSales] CHECK CONSTRAINT [FK_ProductSales_Products_Product_Id]
GO

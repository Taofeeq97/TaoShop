from django.contrib import admin
from .models import Product

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'price', 'countInStock', 'created_at', 'updated_at')
    list_filter = ('brand', 'category', 'created_at', 'updated_at')
    search_fields = ('name', 'brand', 'category')
    ordering = ('-created_at',)

admin.site.register(Product, ProductAdmin)


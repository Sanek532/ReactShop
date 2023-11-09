<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function orders() {
        return $this->belongsTo(Product::class, 'product_id');

    }
//    public function orders() {
//        return $this->hasMany(Product::class);
//    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $keyType = 'string'; // Указывает, что тип ключа (поля id) - строка
    public $incrementing = false;  // Отключает автоинкремент для ключа
}

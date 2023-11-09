<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'product_id' => 1,
                'name' => "Стул серый",
                'image' => 'chair-grey.jpg',
                'description' => 'Серый стул для вашего дома',
                'category_id' => 'chairs',
                'price' => '49.99'
            ],
            [
                'product_id' => 2,
                'name' => "стол",
                'image' => 'table.png',
                'description' => 'Стол для вашего дома',
                'category_id' => 'tables',
                'price' => '149.99'
            ],
            [
                'product_id' => 3,
                'name' => "Диван",
                'image' => 'sofa.jpg',
                'description' => 'Диван для вашего дома',
                'category_id' => 'sofas',
                'price' => '49.99'
            ],
            [
                'product_id' => 4,
                'name' => "Картина 'Кролик'",
                'image' => 'paint.jpg',
                'description' => 'Картина для вашего дома',
                'category_id' => 'paintings',
                'price' => '49.99'
            ],
            [
                'product_id' => 5,
                'name' => "Роза 'красная'",
                'image' => 'flower.jpg',
                'description' => 'Цветок вашего дома',
                'category_id' => 'flowers',
                'price' => '49.99'
            ],
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => "all",
                'name' => "Все",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => "chairs",
                'name' => "Стулья",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => "tables",
                'name' => "Столы",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => "flowers",
                'name' => "Цветы",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => "sofas",
                'name' => "Диваны",
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => "paintings",
                'name' => "Картины",
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}

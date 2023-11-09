<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->product_id,
            'title' => $this->name,
            'description' => $this->description,
            'category' => $this->category_id,
            'price' => $this->price,
            'img' => $this->image,
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'start_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'end_date' => $this->faker->dateTimeBetween('+1 year', '+2 years'),
            'location' => $this->faker->address,
            'registration_start_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'registration_end_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'max_participants' => $this->faker->numberBetween(10, 100),
            'min_participants' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 0, 1000),
            'user_id' => \App\Models\User::factory(),
        ];
    }
}

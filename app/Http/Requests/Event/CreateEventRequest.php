<?php

namespace App\Http\Requests\Event;

use Illuminate\Foundation\Http\FormRequest;

class CreateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'location' => 'required|string',
            'registration_start_date' => 'nullable|date',
            'registration_end_date' => 'nullable|date',
            'max_participants' => 'nullable|integer',
            'min_participants' => 'nullable|integer',
            'price' => 'required|numeric',
        ];
    }

    /**
     * Get the validation attributes that apply to the request.
     *
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'name' => 'event name',
            'description' => 'event description',
            'start_date' => 'event start date',
            'end_date' => 'event end date',
            'location' => 'event location',
            'registration_start_date' => 'event registration start date',
            'registration_end_date' => 'event registration end date',
            'max_participants' => 'event max participants',
            'min_participants' => 'event min participants',
            'price' => 'event price',
        ];
    }
}

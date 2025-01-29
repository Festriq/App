'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import moment from 'moment';
import { useState } from 'react';
import {
    Calendar as BigCalendar,
    momentLocalizer,
    type Event,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../../css/calendar.css';
import { AddEventModal } from './add-event-modal';

const localizer = momentLocalizer(moment);

export function FullScreenCalendar() {
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddEvent = (newEvent: Event) => {
        setEvents([...events, newEvent]);
        setIsModalOpen(false);
    };

    return (
        <Card className="h-[calc(100vh-2rem)] w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-2xl font-bold">Calendar</CardTitle>
                <Button onClick={() => setIsModalOpen(true)}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Add Event
                </Button>
            </CardHeader>
            <CardContent>
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 'calc(100vh - 10rem)' }}
                    className="shadcn-calendar"
                />
            </CardContent>
            <AddEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddEvent={handleAddEvent}
            />
        </Card>
    );
}

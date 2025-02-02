import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import type { ColumnDef } from '@tanstack/react-table';

// Define your data type
type Event = {
    id: string;
    title: string;
    date: string;
    // ... other fields
};

// Define your columns
const columns: ColumnDef<Event>[] = [
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'date',
        header: 'Date',
    },
    // ... other columns
];

// Your data
const events: Event[] = [
    { id: '1', title: 'Event 1', date: '2023-06-01' },
    { id: '2', title: 'Event 2', date: '2023-06-15' },
    // ... more events
];

export default function EventsPage() {
    const pageTitle = 'Events';
    const breadcrumb = [{ title: 'Events', route: 'events.index' }];
    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Events</h1>
                    <Link href={route('events.create')}>
                        <Button>Create Event</Button>
                    </Link>
                </div>
                <DataTable
                    columns={columns}
                    data={events}
                    filterColumn="title"
                    filterPlaceholder="Filter events..."
                />
            </div>
        </AuthenticatedLayout>
    );
}

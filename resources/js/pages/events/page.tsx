import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { columns, type Event } from '@/pages/events/columns';
import { DataTable } from '@/pages/events/data-table';

const events: Event[] = [
    {
        id: '1',
        title: 'Company Picnic',
        description: 'Annual company gathering',
        date: '2023-07-15',
        status: 'upcoming',
    },
    {
        id: '2',
        title: 'Product Launch',
        description: 'Launching our new product line',
        date: '2023-08-01',
        status: 'upcoming',
    },
    {
        id: '3',
        title: 'Team Building Workshop',
        description: 'Improving team collaboration',
        date: '2023-06-30',
        status: 'completed',
    },
    {
        id: '4',
        title: 'Client Meeting',
        description: 'Discussing project progress',
        date: '2023-07-05',
        status: 'ongoing',
    },
    {
        id: '5',
        title: 'Quarterly Review',
        description: 'Reviewing Q2 performance',
        date: '2023-07-20',
        status: 'upcoming',
    },
];

export default function EventsPage() {
    const pageTitle = 'Events Dashboard';
    const breadcrumb = [{ title: 'Events', route: 'events.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <DataTable columns={columns} data={events} />
            </div>
        </AuthenticatedLayout>
    );
}

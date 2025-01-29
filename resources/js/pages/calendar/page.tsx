import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { FullScreenCalendar } from '@/pages/calendar/components/full-screen-calendar';

export default function CalendarPage() {
    const pageTitle = 'Events Calendar';
    const breadcrumb = [{ title: 'Events Calendar', route: 'calendar.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <FullScreenCalendar />
            </div>
        </AuthenticatedLayout>
    );
}

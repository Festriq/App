import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function AnnouncementsPage() {
    const pageTitle = 'Announcements';
    const breadcrumb = [
        { title: 'Announcements', route: 'announcements.index' },
    ];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}

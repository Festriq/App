import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function CampaignsReportPage() {
    const pageTitle = 'Campaigns Report';
    const breadcrumb = [
        { title: 'Reports', route: 'reports.index' },
        { title: 'Campaigns Report', route: 'campaigns.index' },
    ];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

export default function FeedbacksPage() {
    const pageTitle = 'Feedbacks';
    const breadcrumb = [{ title: 'Feedbacks', route: 'feedbacks.index' }];

    return (
        <AuthenticatedLayout title={pageTitle} breadcrumb={breadcrumb}>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0"></div>
        </AuthenticatedLayout>
    );
}

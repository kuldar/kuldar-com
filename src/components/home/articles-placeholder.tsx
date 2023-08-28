import SectionTitle from '@/components/shared/section-title'
import { ArticlesPlaceholderNewsletterForm } from '@/components/home/articles-placeholder-newsletter-form'
import Icons from '@/components/svgs/icons'

// Articles placeholder
export async function ArticlesPlaceholder() {
  return (
    <div className="relative order-1 col-span-12 border-r border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 lg:order-2 lg:col-span-7 xl:col-span-8">
      <div className="h-full border-l border-gray-500 bg-gray-1000/20 p-6 pr-0 transition-colors hover:bg-transparent xs:p-10 lg:border-l-0">
        <div className="mx-auto flex h-full max-w-md flex-1 flex-col items-center justify-center gap-y-4">
          <div className="inline-block text-center text-3xl font-bold leading-tight">
            Articles coming soon.
          </div>
          <ArticlesPlaceholderNewsletterForm />
        </div>
      </div>
    </div>
  )
}
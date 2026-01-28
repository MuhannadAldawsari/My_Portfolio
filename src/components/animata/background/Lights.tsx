import { cn } from '@/lib/utils'

export const Lights: React.FC<{ className?: string }> = ({ className }) => (
    <div className={cn('w-full h-full overflow-hidden absolute inset-0 -z-10', className)}>
        <div
            className={'w-full h-full relative bottom-[-200px] animate-moveUp opacity-20 dark:opacity-[0.02]'}
            style={{
                background:
                    'conic-gradient(from 180deg at 50% 50%, #ffebc7ff 0deg, #cffaefff 180deg, #ffebc7ff 1turn)',
                filter: 'blur(75px)',
            }}
        />
    </div>
)

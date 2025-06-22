import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import BodyRenderer from './BodyRenderer'

export default function TruncatedTooltip({ content, width }: { content: string, width: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`truncate cursor-pointer`}
          style={{
            maxWidth: width
          }}
        >
          <BodyRenderer body={content} />
        </div>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs whitespace-normal">
        <BodyRenderer body={content} />
      </TooltipContent>
    </Tooltip>
  )
}

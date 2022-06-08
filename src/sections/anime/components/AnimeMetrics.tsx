import type { ReactElement, ReactNode } from 'react'
import { HStack, Text, VStack } from 'native-base'
import type { Anime } from '../../../@types/api/jikan'

interface Props {
  readonly anime: Anime
}

const Metric = ({ children }: { children: ReactNode }): ReactElement => (
  <VStack alignItems="center">{children}</VStack>
)

const MetricValue = ({ children }: { children: ReactNode }): ReactElement => (
  <Text fontSize="2xl" fontWeight={700}>
    {children}
  </Text>
)

const MetricTitle = ({ children }: { children: ReactNode }): ReactElement => (
  <Text>{children}</Text>
)

export function AnimeMetrics({ anime }: Props): ReactElement {
  return (
    <HStack justifyContent="center" space={8}>
      <Metric>
        <MetricTitle>Episodes</MetricTitle>
        <MetricValue>{anime.episodes}</MetricValue>
      </Metric>
      <Metric>
        <MetricTitle>Score</MetricTitle>
        <MetricValue>{anime.score}</MetricValue>
      </Metric>
      <Metric>
        <MetricTitle>Rank</MetricTitle>
        <MetricValue>{anime.rank}</MetricValue>
      </Metric>
    </HStack>
  )
}

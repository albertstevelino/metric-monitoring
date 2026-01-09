import Delayer from '../common/delayer';

interface PollConfig {
  onError?: (...args: Array<any>) => void|Promise<void>;
  delayer?: Delayer;
  consumerCount?: number;
  concurrency?: number;
  enableInfoLogging?: boolean,
  additionalConfig?: {
    [key: string]: any
  }
}

export = PollConfig;

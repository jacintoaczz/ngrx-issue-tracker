import { Issue } from '@models/issues/issue.interface';

export interface Issues {
    [id: string]: Issue;
}

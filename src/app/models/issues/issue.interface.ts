import { Priority } from '@models/issues/priority.interface';

/**
 * Model for an Issue.
 */
export interface Issue {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    resolved: boolean;
}

import { FirebaseError, database } from 'firebase/app';
import { useListVals } from 'react-firebase-hooks/database';

const useFirebaseList = <T extends {}>(
    query: database.Query,
    keyField?: keyof T
): [T[] | undefined, boolean, FirebaseError | undefined] => {
    const [values, loading, error] = useListVals<T>(query, { keyField: keyField as string });
    return [values, loading, error];
};

export { useFirebaseList };

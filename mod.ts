import { dirname, fromFileUrl, join } from "std/path/mod.ts";
import { IReader, IRecord, Reader } from "text-plain-db/mod.ts";

const __filename = fromFileUrl(import.meta.url);
const __dirname = dirname(__filename);

interface PersonRecord extends IRecord {
  Age: number;
  Name: string;
  Created: string;
}

class PersonReader extends Reader<PersonRecord>
  implements IReader<PersonRecord> {
  constructor(path: string) {
    super(path);
  }

  public async getRecords() {
    const records = await super.getRecords();

    // Do some custom logic here

    return records;
  }

  public async getRecord(id: string) {
    const record = await super.getRecord(id);

    // Do some custom logic here

    return record;
  }

  public async getRecordsBy(filter: Partial<PersonRecord>) {
    const records = await super.getRecordsBy(filter);

    // Do some custom logic here

    return records;
  }
}

const personReader = new PersonReader(join(__dirname, "person.records"));

const [john] = await personReader.getRecordsBy({
  Name: "John",
});

console.log(`${john.Name}'s age is`, john.Age);
console.log(
  `${john.Name}'s record was created on`,
  new Date(john.Created).toDateString(),
);

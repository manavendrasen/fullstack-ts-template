import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
class Post {
  @PrimaryKey()
    _id!: string;

  @Property()
    title!: string;

  @Property({ type: "date" })
    createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

  constructor(title: string) {
    this.title = title;
  }
}

export default Post;

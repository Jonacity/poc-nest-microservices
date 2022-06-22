import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Profile {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}

export default Profile;

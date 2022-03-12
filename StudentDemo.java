// developed by Developer
class Student
{
		// instance members

	private int rollno;
	private String name;
	private int age;
	private String qualification;

		public void setRollno(int k)
		{
			rollno=k;
		}
		public int getRollno()
		{
			return rollno;
		}
		public void setName(String n)
		{
			name=n;
		}
		public String getName()
		{
			return name;
		}
		public void setAge(int p)
		{
			age=p;
		}
		public int getAge()
		{
			return age;
		}
		public void setQualification(String str)
		{ 
			qualification=str;
		}
		public String getQualification()
		{
			return qualification;
		}
}


// used by Client

public class StudentDemo
{
	public static void main(String args[])
	{
		// client will use Student class here
		Student s1=new Student();  // create object or instance

		s1.setRollno(1);
		s1.setName("Ganesh");
		s1.setAge(20);
		s1.setQualification("BE");

		System.out.println(s1.getRollno()+"\t"+s1.getName()+"\t"+s1.getAge()+"\t"+s1.getQualification());


		Student s2=new Student();  // create object or instance

		s2.setRollno(2);
		s2.setName("Sunita");
		s2.setAge(21);
		s2.setQualification("ME");

		System.out.println(s2.getRollno()+"\t"+s2.getName()+"\t"+s2.getAge()+"\t"+s2.getQualification());

	}
}


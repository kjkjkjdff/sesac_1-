package sesac.sesac.spring;

public class Person {
    private String name;
    private int age;
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Person(String name, int age){ //생성자
        this.name = name;
        this.age = age;
    }


}

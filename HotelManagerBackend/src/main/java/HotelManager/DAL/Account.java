package HotelManager.DAL;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Account {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String username;
    private String password;
    private String role;

    public Account(){}

    public Account(Account account){
        this.username = account.username;
        this.password = account.password;
        this.role = account.role;
    }

    public Integer getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }
    public String getRole() {
        return role;
    }
    public void setId(Integer ID) {
        this.id = ID;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setRole(String role) {
        this.role = role;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if(!(o instanceof Account)){
            return false;
        }
        Account account = (Account)o;

        return Objects.equals(this.id, account.id) && Objects.equals(this.username, account.username)
                && Objects.equals(this.password, account.password) && Objects.equals(this.role, account.role);
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.id, this.username, this.password, this.role);
    }

    @Override
    public String toString(){
        return "HotelManager.DAL.Account{" + ", id=" + this.id + ", name='" + this.username + "', Role=" + this.role + '}';
    }
}

import java.awt.*;

public class Add {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 0; i < args.length; i++) {
            sum += Integer.parseInt(args[i]);
        }
        Frame f = new Frame();
        f.setBounds(20, 20, 400, 400);
        TextField t = new TextField(String.valueOf(sum));
        // t.setBounds(50, 100, 200, 30);
        f.add(t);
        f.setBackground(new Color(200, 0, 0));
        f.setVisible(true);
    }
}

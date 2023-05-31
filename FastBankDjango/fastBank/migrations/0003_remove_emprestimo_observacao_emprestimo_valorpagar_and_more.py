# Generated by Django 4.2 on 2023-05-31 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fastBank', '0002_movimentacao_descricao'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='emprestimo',
            name='observacao',
        ),
        migrations.AddField(
            model_name='emprestimo',
            name='valorPagar',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='emprestimo',
            name='conta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fastBank.conta'),
        ),
        migrations.AlterField(
            model_name='emprestimo',
            name='juros',
            field=models.DecimalField(decimal_places=2, default=0.05, max_digits=10),
        ),
        migrations.AlterField(
            model_name='movimentacao',
            name='tipo',
            field=models.CharField(choices=[('p', 'PIX'), ('t', 'Transferência'), ('d', 'Depósito')], max_length=1),
        ),
        migrations.AlterField(
            model_name='movimentacao',
            name='valor',
            field=models.DecimalField(decimal_places=2, default='p', max_digits=10),
        ),
    ]